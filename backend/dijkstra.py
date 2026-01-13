# backend/dijkstra.py

import heapq

def dijkstra(graph, start, end):
    pq = []
    heapq.heappush(pq, (0, start))

    distances = {node: float("inf") for node in graph}
    distances[start] = 0

    previous = {}

    while pq:
        current_dist, current_node = heapq.heappop(pq)

        if current_node == end:
            break

        for neighbor, weight in graph[current_node].items():
            distance = current_dist + weight

            if distance < distances[neighbor]:
                distances[neighbor] = distance
                previous[neighbor] = current_node
                heapq.heappush(pq, (distance, neighbor))

    # Bangun path
    path = []
    node = end
    while node in previous:
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

    # Bangun graph
    for u, v, w in edges:
        if u not in graph:
            graph[u] = {}
        if v not in graph:
            graph[v] = {}

        graph[u][v] = w
        graph[v][u] = w   # undirected

    return dijkstra(graph, start, end)
