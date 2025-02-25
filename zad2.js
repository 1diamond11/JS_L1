function ipv4Parser(ip, subnet) {
    const ipParts = ip.split('.').map(Number);
    const subnetParts = subnet.split('.').map(Number);

    const networkParts = ipParts.map((part, i) => part & subnetParts[i]);
    const hostParts = ipParts.map((part, i) => part & ~subnetParts[i]);

    return [
        networkParts.join('.'),
        hostParts.join('.')
    ];
}
