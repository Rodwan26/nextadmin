import Image from "next/image";
import Link from "next/link";
import styles from "@/app/ui/Dashboard/products/products.module.css";
import Search from "@/app/ui/Dashboard/search/search";
import Pagination from "@/app/ui/Dashboard/pagination/pagination";

const ProductsPage = async () => {

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>    
            <tr>
              <td>
                <div className={styles.product}>
                  <Image
                    src= "/noproduct.jpg"
                    alt=""
                    width={40}
                    height={40}
                    className={styles.productImage}
                  />
                  Iphone
                </div>
              </td>
              <td>dec frt giud 
              </td>
              <td>$1232</td>
              <td>12.04.2010</td>
              <td>1554</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/products/1`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form >
                    <input type="hidden" name="id"  />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
         
        </tbody>
      </table>
      <Pagination  />
    </div>
  );
};

export default ProductsPage;