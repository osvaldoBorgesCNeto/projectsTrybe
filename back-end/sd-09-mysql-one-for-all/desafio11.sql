CREATE VIEW cancoes_premium AS SELECT c.cancao AS 'nome', COUNT(*) AS 'reproducoes' FROM SpotifyClone.historico_de_reproducoes AS hr INNER JOIN SpotifyClone.cancoes AS c ON c.cancao_id = hr.cancao_id AND hr.usuario_id IN (SELECT u.usuario_id FROM SpotifyClone.usuarios AS u INNER JOIN SpotifyClone.planos AS p ON p.plano_id = u.plano_id WHERE p.plano_id <> 1) GROUP BY hr.cancao_id ORDER BY `nome` ASC;