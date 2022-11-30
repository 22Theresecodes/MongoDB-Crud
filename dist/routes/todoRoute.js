"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todocontroller_1 = require("../controller/todocontroller");
const router = express_1.default.Router();
router.get("/get-todos", todocontroller_1.getTodo);
router.post("/create", todocontroller_1.createTodo);
router.patch("/update-todo/:id", todocontroller_1.updateTodo);
router.delete("/delete-todo/:id", todocontroller_1.deleteTodo);
exports.default = router;
