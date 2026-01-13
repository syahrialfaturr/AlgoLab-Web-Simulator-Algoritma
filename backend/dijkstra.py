import heapq

def dijkstra(graph, start, end):
    pq = [(0, start)]

    distances = {}
    previous = {}

    for node in graph:
        distances[node] = float("inf")

    distances[start] = 0

    while pq:
        current_dist, current = heapq.heappop(pq)

        if current_dist > distances[current]:
            continue

        for neighbor, weight in graph[current].items():
            new_dist = current_dist + weight

            if new_dist < distances[neighbor]:
                distances[neighbor] = new_dist
                previous[neighbor] = current
                heapq.heappush(pq, (new_dist, neighbor))

    if distances[end] == float("inf"):
        return {"error": "Tidak ada jalur"}

    path = []
    node = end
    while node != start:
        path.append(node)
        node = previous[node]
    path.append(start)
    path.reverse()

    return {
        "path": path,
        "distance": distances[end]
    }

# ======================
# Wrapper API
# ======================
def process_dijkstra(edges, start, end):
    graph = {}

    for u, v, w in edges:
        if u not in graph:
            graph[u] = {}
        if v not in graph:
            graph[v] = {}

        graph[u][v] = w
        graph[v][u] = w   

    if start not in graph or end not in graph:
        return {"error": "Start atau End tidak ada di graph"}

    return dijkstra(graph, start, end)
