export const getHostName = (input: string): string => {
  const parser = document.createElement("a");
  parser.href = input;
  return parser.host;
};

export const isIP = (input: string): boolean => {
  // IPv4 regex
  const ipv4Regex =
    /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/;
  // IPv6 regex (simplified)
  const ipv6Regex = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;

  return ipv4Regex.test(input) || ipv6Regex.test(input);
};
