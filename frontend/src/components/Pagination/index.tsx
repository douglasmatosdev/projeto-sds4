import { SalePage } from "types/sale";

type Props = {
    page: SalePage;
    onPageChage: Function;
}

const Pagination = ({ page, onPageChage }: Props) => {

    return (
        <div className="row d-flex justify-content-center">
            <nav>
                <ul className="pagination">
                    <li className={`page-item ${page.first ? 'disabled' : ''}`}>
                        <button onClick={() => onPageChage(page.number - 1)} className="page-link">Anterior</button>
                    </li>
                    <li className="page-item disabled">
                        <span className="page-link">{page.number + 1}</span>
                    </li>
                    <li className={`page-item ${page.last ? 'disabled' : ''}`}>
                        <button onClick={() => onPageChage(page.number + 1)} className="page-link">Próxima</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Pagination;