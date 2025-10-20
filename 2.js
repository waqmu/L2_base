function ipv4Parser(ip, mask) {
  const ipParts = ip.split('.').map(Number);
  const maskParts = mask.split('.').map(Number);
  const network = [];
  const host = [];
  
  for (let i = 0; i < 4; i++) {
    const networkPart = ipParts[i] & maskParts[i];
    const hostPart = ipParts[i] & (~maskParts[i] & 255);
    
    network.push(networkPart);
    host.push(hostPart);
  }
  
  return [network.join('.'), host.join('.')];
}

console.log(ipv4Parser("192.168.2.1", "255.255.255.0"));