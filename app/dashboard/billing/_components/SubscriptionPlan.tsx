// SubscriptionPlan.tsx
import { Button } from '@/components/ui/button';
import { Check, Loader2Icon } from 'lucide-react';
import React from 'react';

interface SubscriptionPlanProps {
  name: string;
  price: number;
  features: string[];
  ctaText: string;
  ctaLink: string;
  variant: string;
  onPayment: Function;
  loading?: boolean;
}

const SubscriptionPlan: React.FC<SubscriptionPlanProps> = ({
  name,
  price,
  features,
  ctaText,
  ctaLink,
  variant,
  onPayment,
  loading
}) => {
  return (
    <div className="bg-white py-16 px-20 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">{name}</h2>
      <p className="text-5xl font-black mb-4 text-center">₹{price}<span className='text-sm font-normal'>/month</span></p>
      <ul>
        {features.map((feature, index) => (
          <li key={index} className="mb-2 flex gap-2 text-neutral-400">
            <Check />
            {feature}
          </li>
        ))}
      </ul>
      {/* @ts-ignore */}
    <button onClick={() => onPayment()} variant={variant} className={`mt-8 w-full rounded-full py-3 text-base ${variant === "secondary" ? "bg-zinc-500 text-zinc-400 hover:bg-zinc-500" : "bg-white text-primary border border-primary hover:text-white hover:bg-primary"}`} disabled={loading}>{loading && <Loader2Icon className='inline mr-3 animate-spin'/>}{ctaText}</button>
    </div>
  );
};

export default SubscriptionPlan;