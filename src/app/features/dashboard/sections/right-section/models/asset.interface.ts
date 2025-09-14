/**
 * Represents a system asset with its associated risk information
 */
export interface Asset {
  /** Unique identifier for the asset */
  id: string;
  /** Human-readable name of the asset */
  name: string;
  /** IP address of the asset */
  ip: string;
  /** Current risk level assessment */
  riskLevel: RiskLevel;
}

/**
 * Risk level enumeration for consistent risk assessment
 */
export type RiskLevel = 'Critical' | 'High' | 'Medium' | 'Low';

/**
 * Risk level metadata including display information
 */
export interface RiskLevelInfo {
  /** Risk level identifier */
  level: RiskLevel;
  /** Count of assets with this risk level */
  count: number;
  /** Color code for UI representation */
  color: string;
  /** Priority order for sorting (lower number = higher priority) */
  priority: number;
}

/**
 * Configuration for risk level display
 */
export const RISK_LEVEL_CONFIG: Record<RiskLevel, Omit<RiskLevelInfo, 'count'>> = {
  Critical: {
    level: 'Critical',
    color: '#dc3545',
    priority: 1
  },
  High: {
    level: 'High',
    color: '#dc3545',
    priority: 2
  },
  Medium: {
    level: 'Medium',
    color: '#fd7e14',
    priority: 3
  },
  Low: {
    level: 'Low',
    color: '#28a745',
    priority: 4
  }
} as const;
