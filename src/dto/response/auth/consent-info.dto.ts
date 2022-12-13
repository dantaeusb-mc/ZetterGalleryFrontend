export class ConsentInfoResponseDto {
  clientName: string;
  scope: string;
  issuedAt: string;
  notAfter: string;
  serverInfo?: {
    motd: string;
    ip: string;
  };
}