# Uses the nmap library to scan a given IP address for open ports

import nmap

def scan_network(ip: str):
    nm = nmap.PortScanner()
    nm.scan(ip, '1-1024')
    return nm[ip]['tcp']

if __name__ == '__main__':
    import sys
    ip_address = sys.argv[1]
    result = scan_network(ip_address)
    print(result)