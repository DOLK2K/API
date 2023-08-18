import conexao from "./connection.js";

export async function listarAgenda(){
    let sql = 'select * from TB_AGENDA';
    let resp = await conexao.query(sql);
    let dados = resp[0];

    return dados;

}

export async function inserir(AGENDINHA) {
    let sql = 'insert into TB_AGENDA (NM_CONTATO, DS_TELEFONE, DS_EMAIL, BT_FAVORITO, DT_CADASTRO ) values (?, ?, ?, ?, ?)';

    let resp = await conexao.query(sql, [AGENDINHA.nome, AGENDINHA.FAVORITO]);
    let dados = resp[0];

    AGENDINHA.id = dados.insertId;
    return AGENDINHA;
}