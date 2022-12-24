from os.path import exists

fileName = "/tmp/test.txt"
counter = 0
def main():
    fileExists = exists(fileName)
    if fileExists:
        f = open(fileName,"r+")
        f.seek(0)
        fileContent = f.read()
        fileContent = int(fileContent) + 1
        f.close()
        f = open(fileName,"w")
        f.write(str(fileContent))    
    else:
        f = open(fileName,"w+")
        fileContent = "1"
        f.write(fileContent)
    f.close()
    print(fileContent)
if __name__ == "__main__":
    main()

