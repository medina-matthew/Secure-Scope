# Uses the nmap library to scan a given IP address for open ports

import nmap

def scan_network(ip: str):
    nm = nmap.PortScanner()
    nm.scan(ip, '1-65535')  # Scan a broader range of ports for debugging

    # Check if the scan results contain the provided IP
    if ip in nm.all_hosts():
        print(f"Scan result: {nm[ip]}")
        if 'tcp' in nm[ip]:
            return nm[ip]['tcp']  # Return TCP scan results if available
        else:
            return f"No TCP ports found for {ip}"
    else:
        return f"IP {ip} not found in scan results"

if __name__ == '__main__':
    import sys
    ip_address = sys.argv[1]
    result = scan_network(ip_address)
    print(result)