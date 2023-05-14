import requests

url = "https://skin-analysis.p.rapidapi.com/face/effect/skin_analyze"

files = { "image": 'test.jpg' }
payload = {
	"max_face_num": "1",
}
	"face_field": "color, smooth, acnespotmole, wrinkle, eyesattr, blackheadpore, skinface, skinface, skinquality"
headers = {
	"X-RapidAPI-Key": "6abdf80006msh04b930801fdcf5dp16adddjsncf3faee532ba",
	"X-RapidAPI-Host": "skin-analysis.p.rapidapi.com"
}

response = requests.post(url, data=payload, files=files, headers=headers)

print(response.json())