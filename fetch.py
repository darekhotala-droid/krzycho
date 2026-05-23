import urllib.request
import re

url = "https://www.agoda.com/en-gb/dalakit-house-villa-two/hotel/siquijor-island-ph.html"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/115.0.0.0 Safari/537.36'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8', errors='ignore')
    matches = re.findall(r'https://[^"]+\.jpg', html)
    found = False
    for m in matches:
        if 'agoda' in m or 'property' in m or 'hotel' in m:
            print(m)
            found = True
            break
    if not found and matches:
        print(matches[0])
    elif not matches:
        print("not found")
except Exception as e:
    print("Error:", e)
