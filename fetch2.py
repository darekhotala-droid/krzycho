import urllib.request
import urllib.parse
import re

url = "https://html.duckduckgo.com/html/?q=Dalakit+House+Villa+Two+Siquijor"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8', errors='ignore')
    matches = re.findall(r'<img.*?src="(//external-content\.duckduckgo\.com/iu/\?u=([^"]+))"', html)
    if matches:
        for m in matches:
            img_url = urllib.parse.unquote(m[1])
            if 'jpg' in img_url or 'jpeg' in img_url or 'png' in img_url:
                print(img_url)
                break
    else:
        print("no matches")
except Exception as e:
    print("Error:", e)
