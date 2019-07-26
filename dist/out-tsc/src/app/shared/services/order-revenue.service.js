import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var OrderRevenueService = /** @class */ (function () {
    function OrderRevenueService(httpClient) {
        this.httpClient = httpClient;
        this.apiURL = 'http://localhost:7000/cart-orders/YM';
    }
    OrderRevenueService.prototype.gerYearRevenue = function (year) {
        return this.httpClient.post(this.apiURL + "/YM", year);
    };
    OrderRevenueService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], OrderRevenueService);
    return OrderRevenueService;
}());
export { OrderRevenueService };
//# sourceMappingURL=order-revenue.service.js.map