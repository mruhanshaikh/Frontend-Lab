import React from 'react'
import { useSuspenseQuery } from '@tanstack/react-query'
import {userOptions} from "../QueryOptions/userOptions"

const UserCount = () => {
  const {data}=useSuspenseQuery(userOptions())
  return (
     <div>
      <h2 className="text-5xl font-bold">{data}K</h2>
      <p className="text-green-400 text-sm mt-2">+18% this week</p>
    </div>
  )
}

export default UserCount
