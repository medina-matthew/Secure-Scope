# Uses the nmap library to scan a given IP address for open ports

import nmap
import json

def scan_network(ip: str):
    nm = nmap.PortScanner()
    nm.scan(ip, '1-65535')  # Scan all available ports

    # Check if the scan results contain the provided IP
    if ip in nm.all_hosts():
        tcp_ports = nm[ip].get('tcp', {})
        return json.dumps(tcp_ports)  # Return TCP ports as a JSON string
    else:
        return json.dumps({"error": f"IP {ip} not found in scan results"})

if __name__ == '__main__':
    import sys
    ip_address = sys.argv[1]
    result = scan_network(ip_address)
    print(result)  # Ensure that the result is printed as a JSON string