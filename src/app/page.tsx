import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <header> EPLabs React </header> <br/>
      <p>  Help us EPLabs Pay Their Instructors and Apprentices.  Any donations are welcome. </p>
      
      {/* Table */}
      <table>
        <tr>
          <th> <h2>BootCamp EPLabs</h2></th>
        </tr>

        <tr>
          <th>Purpose</th>
          <th>Aim</th>
          <th>Why</th>
          </tr>

          <tr>
          <td>Tain Apprentices</td>
          <td>Help the community</td>
          <td>Help the Codding the Community grow</td>
          </tr>

      </table>

    {/* Form */}
      <form action="/send-data-here" method="post">
        <label for="username">Username:</label>
        <input type="text" id="first" name="username" />
        <button type="submit">Submit</button>
      </form>

    {/* navegation */}
      <nav>

        
         </nav>

     
      <div>     
      </div>
    </main>
  );
}
