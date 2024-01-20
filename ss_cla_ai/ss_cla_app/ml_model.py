# ml_model.py
import requests

CHATGPT_API_ENDPOINT = 'https://your-chatgpt-api-endpoint.com'

def get_chatgpt_response(label):
    try:
        response = requests.post(
            f'{CHATGPT_API_ENDPOINT}/generate',  # Replace with your ChatGPT API endpoint
            json={'input': f'Image label: {label}'}
        )

        if response.status_code == 200:
            return response.json().get('choices')[0].get('text')

        return 'Error: Unable to get ChatGPT response'

    except Exception as e:
        return str(e)
