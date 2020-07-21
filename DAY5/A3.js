export async function http<T>(
    request: RequestInfo
  ): Promise<HttpResponse<T>> {
    const response: HttpResponse<T> = await fetch(
      request
    );
  
    try {
      // may error if there is no body
      response.parsedBody = await response.json();
    } catch (ex) {}
  
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response;
  }
  let response: HttpResponse<Todo[]>;
  try {
    response = await http<Todo[]>(
      "https://jsonplaceholder.typicode.com/todosX"
    );
    console.log("response", response);
  } catch (response) {
    console.log("Error", response);
  }