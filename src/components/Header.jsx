import React from 'react'

export const Header = ({teamMemberCount, selectedTeam}) => {
  return (
    <div className='container'>
      <div className='row mt-3 mb-3 justify-content-center'>

          <div className='col-8'>
               
                <h1 className='bg-primary'>Team Member Allocation</h1>
                <h3>{selectedTeam} has {teamMemberCount} {teamMemberCount === 1? 'member': 'members'}</h3>
          </div> 
      </div>
    </div>
  )
}
