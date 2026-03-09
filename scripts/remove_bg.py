import os
from rembg import remove
from PIL import Image

input_path = "C:/Users/gurra/.gemini/antigravity/brain/c90ae0a8-4da3-4058-8874-29af45a7696d/media__1772949972297.jpg"
output_path = "d:/protfolio/public/robot.png"

# Check if file exists
if not os.path.exists(input_path):
    print(f"Error: Input file {input_path} not found.")
    exit(1)

# Open image, process background removal, and save
try:
    print(f"Processing image: {input_path}")
    input_img = Image.open(input_path)
    # Removing background
    output_img = remove(input_img)
    print(f"Background removed. Saving to: {output_path}")
    output_img.save(output_path)
    print("Success: Image processed and saved.")
except Exception as e:
    print(f"An error occurred: {e}")
