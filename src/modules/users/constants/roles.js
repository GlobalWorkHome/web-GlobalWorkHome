export const USER_ROLES = ['employee', 'company']

/* Object
    {
        employee: 'employee',
        company: 'company'
    }
*/
export const USER_ROLES_OPTIONS = USER_ROLES.reduce(( obj, role )=>{
    obj[role] = role    
    return obj
},{})



/*  Array
    [
        {
            key: 'employee',
            value: 'Employee',
        },
        {
            key: 'company',
            value: 'Company',
        },
    ]
*/
export const USER_ROLES_SELECT = USER_ROLES.map(role => ({
    key: role,
    value: role.split('')[0].toUpperCase() + role.split('').splice(1).join('')
}))
