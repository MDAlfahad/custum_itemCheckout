import React, { useMemo } from "react";
import { Price } from "../components/component/PriceComponent";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Button from "../components/button/Button";

const CheckOutPage = () => {
  const navigate = useNavigate();
  const selectedItems = useMemo(() => {
    try {
      const savedItems = JSON.parse(
        localStorage.getItem("selectedItems") || "[]",
      );

      return Array.isArray(savedItems) ? savedItems : [];
    } catch {
      return [];
    }
  }, []);

  const invoiceDate = new Date().toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const invoiceNumber = `INV-${Date.now().toString().slice(-8)}`;

  const formatPrice = (amount) => (
    <Price amount={Number(amount) || 0} currency="INR" locale="en-IN" />
  );

  const invoiceItems = selectedItems.map((item, index) => {
    const rate = Math.max(0, Number(item.sellingPrice) || 0);
    const gstRate = Math.max(0, Number(item.gstrate) || 0);
    const qty = Math.max(0, Number(item.qty) || 1);

    const taxableRate = rate / (1 + gstRate / 100);
    const gstRateAmount = rate - taxableRate;

    return {
      ...item,
      serialNumber: index + 1,
      rate,
      qty,
      gstRate,
      taxableRate,
      gstRateAmount,
      taxableTotal: taxableRate * qty,
      gstTotal: gstRateAmount * qty,
      total: rate * qty,
    };
  });

  const totals = invoiceItems.reduce(
    (acc, item) => ({
      quantity: acc.quantity + item.qty,
      taxable: acc.taxable + item.taxableTotal,
      gst: acc.gst + item.gstTotal,
      total: acc.total + item.total,
    }),
    { quantity: 0, taxable: 0, gst: 0, total: 0 },
  );

  const company = selectedItems[0] || {};

  const handlePrint = () => {
    window.print();
  };

  if (selectedItems.length === 0) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
        <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-3xl">
            🧾
          </div>
          <h1 className="text-xl font-bold text-slate-800">
            No items in invoice
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Add products to your items list before generating an invoice.
          </p>
          <button
            onClick={() => window.history.back()}
            className="mt-6 rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-700"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-green-500/30 px-3 py-8 sm:px-6 print:bg-white print:p-0">
      <div className="h-10">
        <div className="flex ">
        <span
          className="p-2  rounded-full bg-green-500 border border-black/30 cursor-pointer hover:p-3 hover:shadow-md transition-all duration-300"
          onClick={() => navigate("/")}
        >
          <IoArrowBack />
        </span>
      </div>
      </div>
      {/* Toolbar */}
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 print:hidden">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Invoice Preview</h1>
          <p className="mt-1 text-sm text-slate-500">
            Review your invoice before printing.
          </p>
        </div>

        
      </div>

      {/* Invoice */}
      <main
        id="invoice"
        className="invoice-paper mx-auto max-w-6xl overflow-hidden border border-slate-200 bg-white shadow-sm print:max-w-none print:rounded-none print:border-0 print:shadow-none "
      >
        {/* Header */}
        <header className="border-b-2 border-slate-900 p-2">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
                Tax Invoice
              </p>
              <h2 className="text-3xl font-black tracking-tight text-slate-900">
                {company.CompanyName || "Company Name"}
              </h2>
              <p className="text-sm text-slate-500">
                {company.address || company.companyAddress || ""}
              </p>
              {company.phone && (
                <p className="text-sm text-slate-500">Phone: {company.phone}</p>
              )}
              {company.email && (
                <p className="text-sm text-slate-500">Email: {company.email}</p>
              )}
              <p className="text-sm font-semibold text-slate-700">
                GSTIN: {company.gstCode || "—"}
              </p>
            </div>

            <div className="min-w-52 rounded-lg print:bg-white print:p-0">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                Invoice Number
              </p>
              <p className="text-sm font-bold text-slate-900">
                {invoiceNumber}
              </p>

              <p className=" text-[12px] font-semibold uppercase tracking-wider text-slate-500">
                Invoice Date
              </p>
              <p className="text-sm font-semibold text-slate-800">
                {invoiceDate}
              </p>
            </div>
          </div>
        </header>

        {/* Items Table */}
        <section className="p-4">
          <div className="">
            <h3 className="text-base font-bold text-slate-900">
              Invoice Items
            </h3>
            {/* <p className="mt-1 text-sm text-slate-500">
              {invoiceItems.length} product(s) in this invoice
            </p> */}
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[850px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-white text-black/80 print:bg-white print:text-black border border-black/50">
                  <th className="px-1 py-1 text-center font-semibold">SN.</th>
                  <th className="px-1 py-1 font-semibold border border-black/50">
                    Product Details
                  </th>
                  <th className="px-1 py-1 text-center font-semibold border border-black/50">
                    Qty
                  </th>
                  <th className="px-1 py-1 text-center font-semibold border border-black/50">
                    HSN
                  </th>
                  <th className="px-1 py-1 text-right font-semibold border border-black/50">
                    Rate
                  </th>
                  <th className="px-1 py-1 text-right font-semibold border border-black/50">
                    Taxable Value
                  </th>
                  <th className="px-1 py-1 text-center font-semibold border border-black/50">
                    GST %
                  </th>
                  <th className="px-1 py-1 text-right font-semibold border border-black/50">
                    GST Amount
                  </th>
                  <th className="px-1 py-1 text-right font-semibold">Total</th>
                </tr>
              </thead>

              <tbody>
                {invoiceItems.map((item) => (
                  <tr
                    key={item.id ?? `${item.productname}-${item.serialNumber}`}
                    className="border-b border-slate-200"
                  >
                    <td className="w-0 py-1 text-center text-slate-500 border border-black/50">
                      {item.serialNumber}
                    </td>

                    <td className="max-w-64 px-1 py-1 border border-black/50">
                      <div className="flex gap-2">
                        <div>
                            <p className="font-semibold text-slate-900">
                          {item.productname || "Unnamed Product"}
                        </p>
                        {item.brand && (
                          <p className="tracking-tight  text-[12px] text-slate-500">
                            Brand: {item.brand}
                          </p>
                        )}
                        </div>
                        {item.specification && (
                          <p className="mt-1 whitespace-normal text-xs leading-5 text-slate-500">
                            {item.specification}
                          </p>
                        )}
                      </div>
                    </td>

                    <td className="w-0 px-1 py-1 w-auto text-center border border-black/50">
                      {item.qty}
                    </td>

                    <td className="w-0 px-1 py-1 text-center border border-black/50">
                      {item.hsnCode || item.hsn || "—"}
                    </td>

                    <td className="w-0 px-1 py-1 text-right border border-black/50">
                      {formatPrice(item.rate)}
                    </td>

                    <td className="w-0 px-1 py-1 text-right border border-black/50">
                      {formatPrice(item.taxableRate)}
                    </td>

                    <td className="w-0 px-1 py-1 text-center border text-right border-black/50">
                      {item.gstRate}%
                    </td>

                    <td className="w-0 px-1 py-1 text-right border border-black/50">
                      {formatPrice(item.gstRateAmount)}
                    </td>

                    <td className="w-0 px-1 py-1 text-right font-semibold text-slate-900 border border-black/50">
                      {formatPrice(item.total)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Totals */}
          <div className=" flex">
            <div className="w-full flex items-center border border-black/50  ">
              <div className="w-full flex gap-4 px-8 py-3 text-sm">
                <span className="text-slate-500">Total Quantity</span>
                <span className="font-semibold text-slate-800">
                  {totals.quantity}
                </span>
              </div>

              <div className="flex flex-col px-2 gap-2 text-sm border-x border-black/50">
                <span className="text-black/50 text-[12px] font-bold">
                  Taxable Amount
                </span>
                <span className="font-bold text-[16px]">
                  {formatPrice(totals.taxable)}
                </span>
              </div>

              <div className="flex flex-col px-2 gap-2 text-sm border-x border-black/50">
                <span className="text-black/50 text-[12px] font-bold">
                  Total GST
                </span>
                <span className="font-bold text-[16px]">
                  {formatPrice(totals.gst)}
                </span>
              </div>
              <div className="flex flex-col px-2 gap-2 text-sm">
                <span className="text-black/50 text-[12px] font-bold">
                  Total Amount
                </span>
                <span className="text-lg font-bold">
                  {formatPrice(totals.total)}
                </span>
              </div>
            </div>
          </div>
          {/* Footer */}
          <footer className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-slate-800">
                Terms & Conditions
              </p>
              <p className="mt-2 text-xs leading-5 text-slate-500">
                Please verify the items, quantities, and tax details before
                completing payment.
              </p>
            </div>

            <div className="flex flex-col items-end justify-end">
              <div className="w-52 border-t border-slate-400 pt-2 text-center">
                <p className="text-sm font-semibold text-slate-800">
                  Authorized Signature
                </p>
              </div>
            </div>
          </footer>

          <p className="mt-10 border-t border-slate-200 pt-4 text-center text-xs text-slate-400">
            Thank you for your business.
          </p>
        </section>
      </main>
      <div className="flex justify-end mr-44 mt-5">
        <button
          onClick={handlePrint}
          className="flex shrink-0 items-center  bg-white px-4 py-3 text-sm font-semibold text-black shadow-sm transition hover:bg-green-500"
        >
          Print Invoice
        </button>
      </div>

      {/* Print styles */}
      <style>{`
        @page {
          size: A4 landscape;
          margin: 10mm;
        }

        @media print {
          html,
          body {
            background: #fff !important;
            margin: 0 !important;
            padding: 0 !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          body * {
            visibility: hidden;
          }

          #invoice,
          #invoice * {
            visibility: visible;
          }

          #invoice {
            position: absolute;
            inset: 0 auto auto 0;
            width: 100%;
            max-width: none;
            overflow: visible;
          }

          #invoice table {
            width: 100%;
            min-width: 0;
            font-size: 9px;
          }

          #invoice th,
          #invoice td {
            padding: 6px 4px;
          }

          #invoice tr {
            break-inside: avoid;
          }
        }
      `}</style>
    </div>
  );
};

export default CheckOutPage;
