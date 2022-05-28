# State-District-Tehsil-List
importing from 3 tables from database  of names "states", "districts" , "tahshil" , where districts and tahsil having state_id and district_id respectively, which will send data to the user in the proper order 

Here we send each state of India with their respective district and each district having their respective tehsil,

2 approached

with Node js ->  making an api which send the whole data in one go ->with 3 sql queries

With React -> calling the respective state data -> with one query 

# if you got error
then change {type:QueryTypes.SELECT} to {type:db.QueryTypes.SELECT} // you can replace db to whatever your sequelize name. 

# bugs report
if you found any bugs, please let me know!!.
