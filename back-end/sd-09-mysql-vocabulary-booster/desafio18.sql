SELECT CONCAT(e.FIRST_NAME, ' ', e.LAST_NAME) AS 'Nome completo', CONCAT(RIGHT(jh.START_DATE, 2), '/', SUBSTRING(jh.START_DATE, 6, 2), '/', YEAR(jh.START_DATE)) AS 'Data de início', CONCAT(RIGHT(jh.END_DATE, 2), '/', SUBSTRING(jh.END_DATE, 6, 2), '/', YEAR(jh.END_DATE)) AS 'Data de rescisão', ROUND((DATEDIFF(jh.END_DATE, jh.START_DATE) / 365), 2) AS 'Anos trabalhados' FROM hr.job_history AS jh INNER JOIN hr.employees AS e ON e.EMPLOYEE_ID =  jh.EMPLOYEE_ID ORDER BY `Nome completo` ASC, `Anos trabalhados` ASC;