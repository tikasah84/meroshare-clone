import React from "react";
import "./LoginPage.css";
import Logo from "../image/brand-login.png";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import PersonIcon from "@material-ui/icons/Person";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { Button, FormControl } from "@material-ui/core";
import "semantic-ui-react";
function LoginPage() {
  let d = new Date();
  return (
    <div className="Container">
      <div className="Card">
        <div className="logo">
          <img src={Logo} alt="Logo of Meroshare" />
        </div>
        <form>
          <FormControl>
            <label>
              <AccountBalanceIcon />
              Depository Participants
            </label>
            <select class="ui search dropdown">
              <option value="">Select your DP</option>
              <input type="text" placeholder="Search" onkeyup="" />
              <option value="volvo">
                ABC SECURITIES PRIVATE LIMITED (13200)
              </option>
              <option value="saab">
                AGRAWAL SECURITIES PRIVATE LIMITED (12300)
              </option>
              <option value="mercedes">
                ARYATARA INVESTMENT AND SECURITIES PRIVATE LIMITED (11900)
              </option>
              <option value="audi">
                ASHUTOSH BROKERAGE AND SECURITIES PRIVATE LIMITED (15600)
              </option>
              <option value="audi">
                ASIAN SECURITIES PRIVATE LIMITED (14700)
              </option>
              <option value="audi">BANK OF KATHMANDU LIMITED (11100)</option>
              <option value="audi">
                BHRIKUTI STOCK BROKING COMPANY PRIVATE LIMITED (15000)
              </option>
              <option value="audi">
                CENTURY COMMERCIAL BANK LIMITED (16000)
              </option>
              <option value="audi">
                CITIZENS BANK INTERNATIONAL LIMITED (11700)
              </option>
              <option value="audi">CIVIL CAPITAL MARKET LIMITED (10100)</option>
              <option value="audi">
                CREATIVE SECURITIES PRIVATE LIMITED (13300)
              </option>

              <option value="audi">
                DAKSHINKALI INVESTMENT AND SECURITIES PRIVATE LIMITED (12000)
              </option>
              <option value="audi">
                DEEVYAA SECURITIES & STOCK HOUSE PRIVATE LIMITED (14500)
              </option>
              <option value="audi">
                DIPSHIKHA DHITOPATRA KAROBAR COMPANY (P.) LTD. (11300)
              </option>
              <option value="audi">
                DYNAMIC MONEY MANAGERS SECURITIES PRIVATE LIMITED (14900)
              </option>
              <option value="audi">EVEREST BANK LTD. (10800)</option>
              <option value="audi">GLOBAL IME BANK LIMITED (12200)</option>
              <option value="audi">GLOBAL IME CAPITAL LIMITED (11200)</option>
              <option value="audi">
                GUHESWORI MERCHANT BANKING & FINANCE LIMITED (16200)
              </option>
            </select>

            <label>
              <PersonIcon />
              Username
            </label>
            <input type="text" />
            <label>
              <LockOpenIcon />
              Password
            </label>
            <input type="password" />
            <Button className="btn" variant="outlined" type="submit">
              Login
            </Button>
          </FormControl>
        </form>
      </div>

      <p className="text">
        {d.getFullYear()} &copy; CDS and Clearing Limited. All Rights Reserved
      </p>
    </div>
  );
}

export default LoginPage;

{
  /* <div className="form">
          <div>
            <label>
              <AccountBalanceIcon />
              Depository Participants
            </label>
            <select>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </div>
          <div>
            <label>
              <PersonIcon />
              Username
            </label>
            <input type="text " />
          </div>
        </div> */
}
