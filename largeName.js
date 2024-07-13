const friendsName= ['sajib hasan', 'mehed islam', 'asif iqbal', 'mahfuzur rahman'];
let bigNameFriends = [];
let bigName;

function BestFriend (friendsName) {
  
 for (let i = 0; i < friendsName.length; i++) {
    const name = friendsName[i];
    const bigword = name.length; 
    if (bigword < bigNameFriends) {
        bigNameFriends = bigword;
    
    }
    bigName = name;
    return bigName;
 }
}

const bigNames = BestFriend(friendsName);
console.log(bigName);

