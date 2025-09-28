"use client";

import { LoadingProviderClient } from '@/components/LoadingProvider';

export default function Loading() {
  return (
    <div className="min-h-[400px] flex flex-col items-center justify-center px-4">
      <LoadingProviderClient 
        message="loading.favorites" 
        size="xl" 
      />
    </div>
  );
}