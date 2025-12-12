export interface ChatMessage {
  role: 'user' | 'model' | 'system';
  text: string;
  timestamp: Date;
  isAudio?: boolean;
}

export enum AgentType {
  AGENT_0 = 'Agent 0 (Ears)',
  AGENT_1 = 'Agent 1 (Voice)',
  AGENT_6 = 'Agent 6 (Teacher)',
  GENERAL = 'Bhoomi Core'
}

export interface Agent {
  id: string;
  name: string;
  role: string;
  description: string;
  icon: string;
}

export interface EconomicMetric {
  year: string;
  povertyRate: number;
  literacyRate: number;
  gdpGrowth: number;
}