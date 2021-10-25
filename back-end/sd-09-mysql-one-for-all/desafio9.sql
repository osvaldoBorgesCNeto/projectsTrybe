DELIMITER $$

CREATE PROCEDURE albuns_do_artista(IN nome VARCHAR(45))
BEGIN
	SELECT a.artista AS 'artista', ab.album AS 'album' FROM SpotifyClone.albums AS ab INNER JOIN SpotifyClone.artistas AS a ON a.artista_id = ab.artista_id WHERE `artista` = nome;
END $$

DELIMITER ;