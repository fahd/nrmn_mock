import React from 'react'

export const LoadingMainCard: React.FC = () => {
  return (
    <div className="mb-4">
      <div className="p-4 rounded-md animate-pulse bg-slate-100 border border-slate-300">
        <div className="flex items-center space-x-4">
          <div className="rounded-full bg-slate-300 h-12 w-12"></div>
          <div className="flex-1 space-y-2">
            <div className="h-4 w-32 rounded bg-slate-300"></div>
            <div className="h-4 w-24 rounded bg-slate-300"></div>
          </div>
        </div>

        <div className="mt-4 h-5 w-full rounded bg-slate-300"></div>
        <div className="mt-2 h-5 w-4/5 rounded bg-slate-300"></div>
        <div className="mt-2 h-5 w-3/5 rounded bg-slate-300"></div>

        <div className="flex justify-between mt-4">
          <div className="h-8 w-20 bg-slate-300 rounded"></div>
          <div className="h-8 w-20 bg-slate-300 rounded"></div>
          <div className="h-8 w-20 bg-slate-300 rounded"></div>
        </div>
      </div>
    </div>
  )
}

export const LoadingSide: React.FC = () => {
  return (
    <div className="mb-4">
      <div className="p-3 rounded-md animate-pulse bg-slate-100 border border-slate-300 shadow-md">
        <div className="flex items-center space-x-3">
          <div className="rounded-full bg-slate-300 h-10 w-10"></div>
          <div className="flex-1 space-y-2">
            <div className="h-3 w-24 rounded bg-slate-300"></div>
            <div className="h-3 w-16 rounded bg-slate-300"></div>
          </div>
        </div>

        <div className="mt-3 h-4 w-5/6 rounded bg-slate-300"></div>
        <div className="mt-2 h-4 w-4/6 rounded bg-slate-300"></div>
      </div>
    </div>
  )
}
