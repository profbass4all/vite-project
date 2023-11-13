import { Collapse } from 'bootstrap'
import React from 'react'
import { useState } from 'react'

export const GroupedTeamMembers = ({employees, setTeam, selectedTeam}) => {
  const [groupEmloyees, setGroupData] = useState(groupTeamMembers())

    function groupTeamMembers(){
      let teams = []

      let teamAMembers = employees.filter(employee => employee.teamName === 'TeamA')
      let teamA = {team: 'TeamA', members: teamAMembers, collapsed: selectedTeam ==='TeamA'? false:true}
      teams.push(teamA)

      let teamBMembers = employees.filter(employee => employee.teamName === 'TeamB')
      let teamB = {team: 'TeamB', members: teamBMembers, collapsed: selectedTeam ==='TeamB'? false:true}
      teams.push(teamB)

      let teamCMembers = employees.filter(employee => employee.teamName === 'TeamC')
      let teamC = {team: 'TeamC', members: teamCMembers, collapsed: selectedTeam ==='TeamC'? false:true}
      teams.push(teamC)

      let teamDMembers = employees.filter(employee => employee.teamName === 'TeamD')
      let teamD = {team: 'TeamD', members: teamDMembers, collapsed: selectedTeam ==='TeamD'? false:true}
      teams.push(teamD)

      return teams;
    }

    function handleTeamClick (event){
        let transformedGroupData = groupEmloyees.map(groupedData => groupedData.team === event.currentTarget.id
                                                              ?{...groupedData, collapsed: !groupedData.collapsed}
                                                              :groupedData                      
          )

        setGroupData(transformedGroupData);
        setTeam(event.currentTarget.id);
    }

  return (
    <div className='container'>
        {
          groupEmloyees.map((item)=>
          {
            return(
              <div key={item.team} className='card mt-2' style={{cursor: 'pointer'}}>
                <h4 id={item.team} className='class-header text-secondary bg-white' onClick={handleTeamClick}>
                  Team Name: {item.team}
                </h4>
                <div id={'collapse_' +item.team} className={item.collapsed === true?"collapse": ''}> 
                      
                      <hr />
                      {
                        item.members.map((member)=> {
                          return(
                            <div className='mt-2'>
                                <h5 className='card-title mt-2'>
                                    <span className='text-dark'>Full Name: {member.fullName}</span>
                                </h5>
                                <p>Designation: {member.designation}</p>
                            </div>
                          )
                        })
                      }

                </div>
              </div>
            )
          })
        }
    </div>
  )
}
