export const styles = `
          .gamegrid {
            display: grid;
            width: 600px;
            height: 600px;
          }

          .cell {
            border: 1px solid #000;
          }

          .cell .owned {
            border-width: 3px;
          }

          .cell.owned-by-1 {background-color: blue;}
          .cell.owned-by-2 {background-color: red;}

          .settings {
            margin-bottom: 20px;
            margin-right: 10px;
            border: 1px solid #000;
            width: 250px;
            padding: 10px;
            display: inline-block;
          }

          .settings p {
            margin-top: 0;
          }
        `
