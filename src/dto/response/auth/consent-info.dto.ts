export class ConsentInfoResponseDto {
  clientName: string;
  scope: string;
  issuedAt: string;
  notAfter: string;
  serverInfo?: {
    title: string;
    motd: string;
    ip: string;
  };
}