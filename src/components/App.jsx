import Profile from "./profile/user.js";
import user from "./json/user.json";
import Statistics from "./statistics/statistics.js";
import data from "./json/data.json";
import FriendList from "./friends/friendList.js";
import friends from "./json/friends.json";
import TransactionHistory from "./transaction/transactionHistory";
import transactions from "./json/transactions.json";


export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
    
  );

};
