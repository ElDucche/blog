import * as React from 'react'
import { useState } from 'react'
// import { useEffect } from 'react'
import { Switch } from '@headlessui/react'

export default function ThemeToggle() {
  const [enabled, setEnabled] = useState(false)

  return (
    <div className="py-8">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        name="Dark mode"
        className={`${enabled ? 'bg-slate-700' : 'bg-slate-500'}
          relative inline-flex h-[21px] w-[37px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-4' : 'translate-x-0'}
            pointer-events-none inline-block h-[17px] w-[17px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  )
}