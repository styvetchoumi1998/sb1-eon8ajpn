import React from 'react';
import { EmailRule } from '../types/email';

interface RuleListProps {
  rules: EmailRule[];
  onDeleteRule: (index: number) => void;
}

export function RuleList({ rules, onDeleteRule }: RuleListProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Aktive Regeln</h2>
      {rules.map((rule, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-center">
            <div>
              <p>Älter als {rule.olderThan} Tage</p>
              {rule.fromAddress && <p>Von: {rule.fromAddress}</p>}
              {rule.subject && <p>Betreff enthält: {rule.subject}</p>}
              {rule.hasAttachment && <p>Hat Anhänge</p>}
            </div>
            <button
              onClick={() => onDeleteRule(index)}
              className="text-red-600 hover:text-red-800"
            >
              Löschen
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}