import frida, sys

def on_message(message, data):
    if message['type'] == 'send':
        print("[*] {0}".format(message['payload']))
    else:
        print(message)

fd = open(sys.argv[1], "r")
jscode = fd.read()
fd.close()

process_name = sys.argv[2]

process = frida.get_usb_device().attach(process_name)
script = process.create_script(jscode)
script.on('message', on_message)
print('[*] Running ', process_name)
script.load()
sys.stdin.read()
