import os
import sys

def main():
    # requirement check
    try:
        relative_path = sys.argv[1]
        files = os.listdir(relative_path).copy()
    except IndexError as e:
        print("IndexError: please provide relative_path")
        exit()
    except FileNotFoundError as e:
        print("FileNotFoundError: no such relative_path")
        exit()
    try:
        prefix = sys.argv[2]
    except IndexError as e:
        prefix = ""

    count = 0
    for i in range(len(files)):
        file_name = files[i]
        if not file_name.startswith("."):
            file_extension = file_name.split(".")[-1]
            src = f"{relative_path}{file_name}"
            dst = f"{relative_path}{prefix}{count}.{file_extension}"
            os.rename(src, dst)
            count += 1
        
if __name__ == '__main__':
    main()
