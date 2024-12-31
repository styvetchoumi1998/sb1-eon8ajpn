import React, { useState } from 'react';
import { RuleForm } from './components/RuleForm';
import { RuleList } from './components/RuleList';
import { EmailRule, EmailConfig } from './types/email';

function App() {
  const [config, setConfig] = useState<EmailConfig>({
    rules: [],
    enabled: false,
  });

  const addRule = (rule: EmailRule) => {
    setConfig(prev => ({
      ...prev,
      rules: [...prev.rules, rule],
    }));
  };

  const deleteRule = (index: number) => {
    setConfig(prev => ({
      ...prev,
      rules: prev.rules.filter((_, i) => i !== index),
    }));
  };

  const toggleEnabled = () => {
    setConfig(prev => ({
      ...prev,
      enabled: !prev.enabled,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-8">E-Mail Auto-Löschen</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Status</h2>
            <label className="flex items-center cursor-pointer">
              <div className="relative">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={config.enabled}
                  onChange={toggleEnabled}
                />
                <div className={`block w-14 h-8 rounded-full ${
                  config.enabled ? 'bg-green-400' : 'bg-gray-300'
                }`}></div>
                <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${
                  config.enabled ? 'transform translate-x-6' : ''
                }`}></div>
              </div>
              <span className="ml-3 text-gray-700">
                {config.enabled ? 'Aktiviert' : 'Deaktiviert'}
              </span>
            </label>
          </div>

          <RuleForm onSubmit={addRule} />
        </div>

        <RuleList
          rules={config.rules}
          onDeleteRule={deleteRule}
        />
      </div>
    </div>
  );
}

export default App;