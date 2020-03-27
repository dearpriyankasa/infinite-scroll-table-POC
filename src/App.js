import React from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import { TableContainer, Paper, TableRow, TableCell, TableHead, TableBody, Table } from "@material-ui/core";

const style = {
  border: "1px solid green",
  margin: 6,
  padding: 8
};

class App extends React.Component {
  state = {
    items: Array.from({ length: 20 }),
    hasMore: true
  };

  fetchMoreData = () => {
    if (this.state.items.length >= 500) {
      this.setState({ hasMore: false });
      return;
    }
    // a fake async api call like which sends
    // 20 more records in .5 secs
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 20 }))
      });
    }, 500);
  };

  render() {
    return (
      <div>
        <h1>Infinite Scroll Demo</h1>
        <hr />
        <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {/* {this.state.items.map((i, index) => (
            <div style={style} key={index}>
              div - #{index}
            </div>
          ))} */}
          <TableContainer style={style} component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Div</TableCell>
                  <TableCell>Index</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.items.map((i, index) => (
                  <TableRow key={index}>
                    <TableCell>Div Tag</TableCell>
                    <TableCell>{index}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </InfiniteScroll>
      </div>
    );
  }
}

export default App;
