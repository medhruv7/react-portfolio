import { List, ListItem } from "@mui/material";

const Acheievements = () => {
  const content = [
    "Kickstart Round B Rank : 865",
    "Kickstart Round E 2019 Rank : 783",
    "Codeforces Rating (Max: 1578)",
    "Codechef : December Cook-Off 2019 Rank : 68",
  ];

  const acheivementsHeading = {
    textAlign: "center",
    fontSize: "2em",
    fontWeight: "bold",
    padding: "10px",
  }

  return (
    <div>
        <div style={acheivementsHeading}>Acheievements</div>
        <List>
            {content.map(item => (
                <ListItem>{item}</ListItem>
            ))}
        </List>
    </div>
  )
};

export default Acheievements;