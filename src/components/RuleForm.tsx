import React from 'react';
import { useForm } from 'react-hook-form';
import { EmailRule } from '../types/email';

interface RuleFormProps {
  onSubmit: (rule: EmailRule) => void;
}

export function RuleForm({ onSubmit }: RuleFormProps) {
  const { register, handleSubmit } = useForm<EmailRule>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Älter als (Tage)
          <input
            type="number"
            {...register('olderThan', { required: true, min: 1 })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </label>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Von E-Mail-Adresse
          <input
            type="email"
            {...register('fromAddress')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </label>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Betreff enthält
          <input
            type="text"
            {...register('subject')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
        </label>
      </div>

      <div>
        <label className="flex items-center text-sm font-medium text-gray-700">
          <input
            type="checkbox"
            {...register('hasAttachment')}
            className="rounded border-gray-300 text-blue-600 shadow-sm"
          />
          <span className="ml-2">Hat Anhänge</span>
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
      >
        Regel hinzufügen
      </button>
    </form>
  );
}