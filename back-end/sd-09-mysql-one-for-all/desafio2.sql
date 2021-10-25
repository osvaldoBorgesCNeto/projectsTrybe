CREATE VIEW estatisticas_musicais AS SELECT MAX(c.cancao_id) AS 'cancoes', MAX(a.artista_id) AS 'artistas', MAX(ab.album_id) AS 'albuns' FROM SpotifyClone.cancoes AS c INNER JOIN SpotifyClone.artistas AS a ON a.artista_id = c.artista_id INNER JOIN SpotifyClone.albums AS ab ON ab.album_id = c.album_id;