#!/usr/bin/env python3
"""Configure GoDaddy DNS for HealthMaxed.com -> GitHub Pages.

Requires environment variables:
  GODADDY_API_KEY
  GODADDY_API_SECRET

This replaces only the apex A records and www CNAME record for healthmaxed.com.
It does not touch MX/email records or unrelated TXT records.
"""
import json
import os
import sys
import urllib.request
import urllib.error

DOMAIN = "healthmaxed.com"
API = "https://api.godaddy.com/v1"
A_RECORDS = [
    {"data": "185.199.108.153", "ttl": 600},
    {"data": "185.199.109.153", "ttl": 600},
    {"data": "185.199.110.153", "ttl": 600},
    {"data": "185.199.111.153", "ttl": 600},
]
WWW_CNAME = [{"data": "iceyyygaming.github.io", "ttl": 600}]

key = os.getenv("GODADDY_API_KEY")
secret = os.getenv("GODADDY_API_SECRET")
if not key or not secret:
    sys.exit("Missing GODADDY_API_KEY or GODADDY_API_SECRET in environment.")

headers = {
    "Authorization": f"sso-key {key}:{secret}",
    "Content-Type": "application/json",
    "Accept": "application/json",
}

def request(method, path, body=None):
    data = json.dumps(body).encode() if body is not None else None
    req = urllib.request.Request(API + path, data=data, method=method, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            raw = resp.read().decode()
            return resp.status, json.loads(raw) if raw else None
    except urllib.error.HTTPError as e:
        raw = e.read().decode(errors="replace")
        raise SystemExit(f"GoDaddy API error {e.code} for {method} {path}: {raw}")

print(f"Checking domain {DOMAIN}...")
status, details = request("GET", f"/domains/{DOMAIN}")
print(f"Domain status: {details.get('status')} | expires: {details.get('expires')}")

print("Setting apex A records for GitHub Pages...")
request("PUT", f"/domains/{DOMAIN}/records/A/@", A_RECORDS)

print("Setting www CNAME for GitHub Pages...")
request("PUT", f"/domains/{DOMAIN}/records/CNAME/www", WWW_CNAME)

print("Verifying records...")
_, a = request("GET", f"/domains/{DOMAIN}/records/A/@")
_, cname = request("GET", f"/domains/{DOMAIN}/records/CNAME/www")
print(json.dumps({"A @": a, "CNAME www": cname}, indent=2))
print("Done. DNS can take a few minutes to a few hours to propagate; GitHub may take time to issue HTTPS cert.")
