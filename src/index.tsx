import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { createServer, Model } from "miragejs";

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelance WebSite",
          type: "deposit",
          category: "dev",
          amount: 6500,
          createdAt: new Date("2021-04-04 08:25:00"),
        },
        {
          id: 2,
          title: "Aluguel",
          type: "withdraw",
          category: "casa",
          amount: 860.55,
          createdAt: new Date("2021-05-08 12:25:00"),
        },
        {
          id: 3,
          title: "Salário",
          type: "deposit",
          category: "Trabalho",
          amount: 10000,
          createdAt: new Date("2021-08-11 07:30:00"),
        },
      ],
    });
  },
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });
    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
