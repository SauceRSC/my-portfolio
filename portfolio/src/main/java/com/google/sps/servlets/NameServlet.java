package com.google.sps.servlets;

import java.io.IOException;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
//mvn package exec:java

@WebServlet("/name")
public class NameServlet extends HttpServlet {
  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    response.setContentType("application/json;charset=UTF-8");
    response.getWriter().println(createJson());
    
  }

  /**
   * Converts a ServerStats instance into a JSON string using manual String concatentation.
   */
  private String createJson() {
    String json = "{";
    json += "\"name\": ";
    json += "\"" + "José Rodrigo Saucedo Cruz" + "\"";
    json += ", ";
    json += "\"Facts\": ";
    json += "[\"Pug Lover\",\"Taco Lover\",\"My favorite pokemon is charmander\",\"My favorite superheroe is Iron Man\",\"I like to go for a run\", \"I like going to the gym\"]";
    json += "}";
    return json;
  }
}


